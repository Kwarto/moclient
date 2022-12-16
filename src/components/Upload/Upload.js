import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';
import { db, storage } from '../../firebase';
import { addDoc, collection, getDoc, doc, serverTimestamp, updateDoc } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { toast } from 'react-toastify';

const initialState = {
  title: '',
  trending: '',
  category: '',
  description: '',
  price: ''
};

const categoryOption = [
  'Men',
  'Women',
  'Sneakers',
  'Bag',
  'Clothing',
  'Electronics',
  'Food',
];
const AddEditBlog = () => {
  const [form, setForm] = useState(initialState);
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(false);

  const { id } = useParams();

  const { title, trending, category, description, price } = form;

  const navigate = useNavigate();
  useEffect(() => {
    const uploadFile = () => {
      const storageRef = ref(storage, file.name);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setProgress(progress);
          switch (snapshot.state) {
            case 'paused':
              console.log('Upload paused');
              break;
            case 'running':
              console.log('Upload is running');
              break;
            default:
              break;
          }
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl) => {
            toast.info('Upload completed can submit blog now');
            setForm((prev) => ({ ...prev, imgUrl: downloadUrl }));
          });
        }
      );
    };

    file && uploadFile();
  }, [file]);

  useEffect(() => {
    id && getBlogDetail();
    // eslint-disable-next-line
  }, [id])
  
  const getBlogDetail = async () => {
    const docRef = doc(db, "blogs", id);
    const snapshot = await getDoc(docRef);
    if (snapshot.exists()) {
      setForm({...snapshot.data()})
    }
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onCategoryChange = (e) => {
    setForm({ ...form, category: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (category && description && title && description) {
      if (!id) {
        try {
          await addDoc(collection(db, 'products'), {
            ...form,
            timestamp: serverTimestamp(),
          });
          toast.success('New product created successfully');
        } catch (error) {
          console.log(error);
        }
      } else {
        try {
          await updateDoc(doc(db, 'products', id), {
            ...form,
            timestamp: serverTimestamp(),
          });
          toast.success('Product updated successfully');
        } catch (error) {
          console.log(error);
        }
      }  
    } else {
      return toast.error('Something went wrong');
    }
    navigate('/');
  };
  return (
    <AddBlogWrapper>
      <div className="form-container">
        <h1>{ id ? "Update Product" : "Upload Product"}</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              name="title"
              placeholder="Product Name"
              value={title || ''}
              onChange={handleChange}
            />
          </div>
          <div>
            <select value={category} onChange={onCategoryChange}>
              <option>Please Select Category</option>
              {categoryOption.map((option, index) => (
                <option value={option || ''} key={index}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <div>
            <input
              type="text"
              name="trending"
              placeholder="Is this discount product, flash deals or new arrival"
              value={trending || ''}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              type="number"
              name="price"
              placeholder="Product Price"
              value={price || ''}
              onChange={handleChange}
            />
          </div>
          <div>
            <textarea
              name="description"
              placeholder="Description"
              value={description || ''}
              onChange={handleChange}
            />
            
          </div>
          <div>
            <input type="file" onChange={(e) => setFile(e.target.files[0])} />
          </div>
          <div>
            <button
              type="submit"
              disabled={progress !== null && progress > 100}>
              {id ? "Update Blog" : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </AddBlogWrapper>
  );
};

const AddBlogWrapper = styled.div`
  padding: 10px 0;
  width: 70%;
  margin: 10px auto;
  text-align: center;
  border-radius: 10px;
  box-shadow: var(--box-shadow);

  form {
    padding: 20px;
    display: flex;
    flex-direction: column;
    background: rgba(47, 0, 255, 0.014);
    border-radius: 10px;
    width: 95%;
    margin: 0 auto;
    input,
    select,
    textarea,
    button {
      width: 70%;
      padding: 10px 15px;
      margin: 10px 0;
      background: #fff;
      border-radius: 5px;
      font-size: 15px;
      font-weight: 500;
    }

    textarea {
      height: 130px;
    }

    button {
      background: rgb(5, 172, 5);
      color: #fff;
      cursor: pointer;
      font-size: 18px;
      font-weight: bold;

      &:hover {
        background: rgb(7, 128, 7);
      }
    }
  }
`;

export default AddEditBlog;

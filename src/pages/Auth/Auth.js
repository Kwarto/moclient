import React, { useState, useEffect } from 'react';
import { AuthWrapper, LeftWrapper, RightWrapper } from './AuthElement';
import authBg from '../../img/auth.gif';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { auth, db } from '../../firebase';
import { storage } from '../../firebase';
import { doc, serverTimestamp, setDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { FaCamera } from 'react-icons/fa';
const initialState = {
  username: '',
  email: '',
  password: '',
};
const Auth = () => {
  const [state, setState] = useState(initialState);
  const [signUp, setSignUp] = useState(false);
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(false);
  const navigate = useNavigate();
  const { email, password, username } = state;
  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  console.log(user)
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
            toast.info('Upload completed');
            setState((prev) => ({ ...prev, imgUrl: downloadUrl }));
          });
        }
      );
    };

    file && uploadFile();
  }, [file]);

  const handleAuth = async (e) => {
    e.preventDefault();
    if (!signUp) {
      if (email && password) {
        const { user } = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
      } else {
        return toast.error('All fields are required!');
      }
    } else {
      if (username && email && password) {
        const { user } = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        await updateProfile(user, { displayName: `${username}` })
        await setDoc(doc(db, 'users', user.uid), {
          ...state,
          timestamp: serverTimestamp(),
        });
      } else {
        return toast.error('All fields are required!');
      }
    }
    navigate('/');
  };
  return (
    <AuthWrapper>
      <LeftWrapper>
        <img src={authBg} alt="Authentication Logo" />
      </LeftWrapper>
      <RightWrapper>
        <div className="title">{!signUp ? 'Sign In' : 'Sign Up'}</div>
        <div className="form-container">
          <form onSubmit={handleAuth}>
            {signUp && (
              <>
                <div className="user">
                  <input
                    type="file"
                    id="file"
                    style={{ display: 'none' }}
                    onChange={(e) => setFile(e.target.files[0])}
                  />
                  <label htmlFor="file">
                    <FaCamera className="f-cam" />
                  </label>
                </div>
                <input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Username"
                  value={username}
                  onChange={handleChange}
                />
              </>
            )}
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              value={email}
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter Password"
              value={password}
              onChange={handleChange}
            />
            <button
              className={`btn ${!signUp ? 'btn-sign-in' : 'btn-sing-up'}`}
              type="submit"
              disabled={progress !== null && progress > 100}>
              {!signUp ? 'Sign In' : 'Sign Up'}
            </button>
          </form>
          <div>
            {!signUp ? (
              <>
                <div className="last">
                  <p>Don't have an account?</p>
                  <span onClick={() => setSignUp(true)}>Sign Up</span>
                </div>
              </>
            ) : (
              <>
                <div className="last">
                  <p>Already have an account?</p>
                  <span onClick={() => setSignUp(false)}>Sign In</span>
                </div>
              </>
            )}
          </div>
        </div>
      </RightWrapper>
    </AuthWrapper>
  );
};

export default Auth;

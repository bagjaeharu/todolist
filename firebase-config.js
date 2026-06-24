// ⚠️ 중요: 아래 값들을 당신의 Firebase Console에서 복사한 값으로 교체하세요!

// Firebase 초기화 설정
const firebaseConfig = {
  apiKey: "AIzaSyDUt7Gl6KPZDBK5YT5J-GU2hSKIEXma5W4",
  authDomain: "todolist-7444b.firebaseapp.com",
  projectId: "todolist-7444b",
  storageBucket: "todolist-7444b.firebasestorage.app",
  messagingSenderId: "718944405362",
  appId: "1:718944405362:web:5dbd1f2c3e4911b9f67feb"
};

// Firebase 초기화
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

console.log('✅ Firebase 초기화 완료!');

<template>
    <div class="flex items-center justify-center h-screen bg-gray-100" id="body">
      <form class="bg-white p-6 rounded shadow-md w-96" @submit.prevent="login">
        <h2 class="text-2xl font-bold mb-6 text-center">เข้าสู่ระบบ</h2>
        <div class="mb-4">
          <label for="email" class="block text-sm font-medium text-gray-700">อีเมลล์</label>
          <input
            type="email"
            id="email"
            v-model="email"
            required
            class="mt-1 block w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
            placeholder="Email"
          />
        </div>
        <div class="mb-6">
          <label for="password" class="block text-sm font-medium text-gray-700">รหัสผ่าน</label>
          <input
            type="password"
            id="password"
            v-model="password"
            required
            class="mt-1 block w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
            placeholder="••••••••"
          />
        </div>
        <button
          type="submit"
          class="w-full text-white p-2 rounded transition"
          id="login-button"
        >
          เข้าสู่ระบบ
        </button>
        <p v-if="error" class="mt-4 text-red-500 text-sm">{{ error }}</p>
        <br>
        <div class="mt-4 flex justify-between">
          <button
            @click.prevent="loginWithGoogle"
            class="w-full bg-red-500 text-white p-2 rounded transition hover:bg-red-600 mr-2"
          >
            <i class="fa-brands fa-google"></i> Google
          </button>
          <button
            @click.prevent="loginWithFacebook"
            class="w-full bg-blue-500 text-white p-2 rounded transition hover:bg-blue-600"
          >
            <i class="fa-brands fa-facebook"></i> Facebook
          </button>
        </div>
      </form>
      <Toast v-if="toastMessage" :message="toastMessage" @close="toastMessage = ''" />
      <ToastError v-if="error" :message="error" @close="error = ''" />
    </div>
</template>

<script>
import { auth } from '../firebase';
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, FacebookAuthProvider } from "firebase/auth";
import Toast from './Toast.vue';
import ToastError from './ToastError.vue'

export default {
  components: {
    Toast,
    ToastError
  },
  data() {
    return {
      email: '',
      password: '',
      error: '',
      toastMessage: ''
    };
  },
  methods: {
    async login() {
      if (this.email === "" || this.password === "") {
        this.error = "กรุณากรอกข้อมูลให้ครบ";
      } else {
        this.error = "";
        try {
          await signInWithEmailAndPassword(auth, this.email, this.password);
          this.toastMessage = 'เข้าสู่ระบบสำเร็จ!';
        } catch (err) {
          this.error = err.message;
          this.toastMessage = 'เข้าสู่ระบบไม่สำเร็จ!';
        }
      }
    },
    async loginWithGoogle() {
      const provider = new GoogleAuthProvider();
      try {
        await signInWithPopup(auth, provider);
        this.toastMessage = 'เข้าสู่ระบบด้วย Google สำเร็จ!';
      } catch (err) {
        this.error = err.message;
      }
    },
    async loginWithFacebook() {
      const provider = new FacebookAuthProvider();
      try {
        await signInWithPopup(auth, provider);
        this.toastMessage = 'เข้าสู่ระบบด้วย Facebook สำเร็จ!';
      } catch (err) {
        this.error = err.message;
      }
    }
  }
};
</script>

<style>
#body {
  border-radius: 50px;
}
#login-button {
  background-color: #FF9967;
}
#login-button:hover {
  background-color: #f9884f;
}
</style>

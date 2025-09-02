import { create } from "zustand";
import { toast } from "react-toastify";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "localhost:3000";

const useAuthStore = create((set, get) => ({
  // State
  user: null,
  isLoading: false,
  isSignedIn: false,
  signupData: {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "",
  },
  verificationData: {
    email: "",
    otp: "",
  },
  loginData: {
    email: "",
    password: "",
  },

  // Actions
  setLoading: (loading) => set({ isLoading: loading }),

  setSignupData: (data) =>
    set((state) => ({
      signupData: { ...state.signupData, ...data },
    })),

  setVerificationData: (data) =>
    set((state) => ({
      verificationData: { ...state.verificationData, ...data },
    })),

  setLoginData: (data) =>
    set((state) => ({
      loginData: { ...state.loginData, ...data },
    })),

  // API Calls
  signin: async (email, password) => {
    set({ isLoading: true });
    try {
      const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        set({
          user: data.user,
          isSignedIn: true,
          loginData: { email: "", password: "" },
        });

        // Store token if provided
        if (data.token) {
          localStorage.setItem("authToken", data.token);
        }

        toast.success("Login successful!");
        return { success: true, data };
      } else {
        toast.error(data.message || "Login failed");
        return { success: false, error: data.message };
      }
    } catch (error) {
      console.error("Login error:", error);
      toast.error("Network error. Please try again.");
      return { success: false, error: error.message };
    } finally {
      set({ isLoading: false });
    }
  },

  signupSeller: async (userData) => {
    set({ isLoading: true });
    try {
      const response = await fetch(`${API_BASE_URL}/api/auth/seller/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: userData.name,
          email: userData.email,
          password: userData.password,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        set((state) => ({
          signupData: { ...state.signupData, email: userData.email },
          verificationData: {
            ...state.verificationData,
            email: userData.email,
          },
        }));
        toast.success(data.message || "Verification code sent to your email");
        return { success: true, data };
      } else {
        toast.error(data.message || "Signup failed");
        return { success: false, error: data.message };
      }
    } catch (error) {
      console.error("Signup error:", error);
      toast.error("Network error. Please try again.");
      return { success: false, error: error.message };
    } finally {
      set({ isLoading: false });
    }
  },

  signupBuyer: async (userData) => {
    set({ isLoading: true });
    try {
      // Since there's no specific buyer signup endpoint, we'll use the seller endpoint
      // but mark it as a buyer in our local state
      const response = await fetch(`${API_BASE_URL}/api/auth/seller/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: userData.name,
          email: userData.email,
          password: userData.password,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        set((state) => ({
          signupData: {
            ...state.signupData,
            email: userData.email,
            role: "buyer",
          },
          verificationData: {
            ...state.verificationData,
            email: userData.email,
          },
        }));
        toast.success(data.message || "Verification code sent to your email");
        return { success: true, data };
      } else {
        toast.error(data.message || "Signup failed");
        return { success: false, error: data.message };
      }
    } catch (error) {
      console.error("Signup error:", error);
      toast.error("Network error. Please try again.");
      return { success: false, error: error.message };
    } finally {
      set({ isLoading: false });
    }
  },

  verifyEmail: async (email, otp) => {
    set({ isLoading: true });
    try {
      const response = await fetch(`${API_BASE_URL}/api/auth/verify-email`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          otp,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        toast.success("Email verified successfully!");
        return { success: true, data };
      } else {
        toast.error(data.message || "Verification failed");
        return { success: false, error: data.message };
      }
    } catch (error) {
      console.error("Verification error:", error);
      toast.error("Network error. Please try again.");
      return { success: false, error: error.message };
    } finally {
      set({ isLoading: false });
    }
  },

  resendVerificationCode: async (email) => {
    set({ isLoading: true });
    try {
      const currentSignupData = get().signupData;
      const response = await fetch(`${API_BASE_URL}/api/auth/seller/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: currentSignupData.name,
          email: email,
          password: currentSignupData.password,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        toast.success("Verification code resent successfully!");
        return { success: true, data };
      } else {
        toast.error(data.message || "Failed to resend code");
        return { success: false, error: data.message };
      }
    } catch (error) {
      console.error("Resend code error:", error);
      toast.error("Network error. Please try again.");
      return { success: false, error: error.message };
    } finally {
      set({ isLoading: false });
    }
  },

  // Clear auth data
  clearAuth: () =>
    set({
      user: null,
      isSignedIn: false,
      signupData: {
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        role: "",
      },
      verificationData: {
        email: "",
        otp: "",
      },
      loginData: {
        email: "",
        password: "",
      },
    }),

  // Reset signup data
  resetSignupData: () =>
    set({
      signupData: {
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        role: "",
      },
    }),
}));

export default useAuthStore;

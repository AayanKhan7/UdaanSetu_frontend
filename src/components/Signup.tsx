import React, { useState } from "react";
import { X } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Label } from "./ui/label";

interface SignupProps {
  onNavigate: (page: string) => void;
}

const Signup: React.FC<SignupProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "",
  });

  const [showPasswordWarning, setShowPasswordWarning] = useState(false);
  const [selectedUserType, setSelectedUserType] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    if (!selectedUserType) {
      alert("Please select a user type");
      return;
    }

    alert("Account created successfully! Please login.");
    onNavigate("login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0f172a] px-4 relative">
      <div className="bg-[#111827] rounded-2xl shadow-xl w-full max-w-md p-8 relative">
        {/* CLOSE BUTTON */}
        <button
          onClick={() => onNavigate("landing")}
          className="fixed top-4 right-4 p-3 rounded-full bg-gray-700 text-gray-300 hover:bg-gray-600 transition shadow-lg z-[999]"
        >
          <X size={22} />
        </button>

        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-semibold text-white">Create Account</h2>
          <p className="text-gray-400 mt-1">Sign up to continue.</p>
        </div>

        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <Label htmlFor="username" className="text-gray-300 mb-3 block">
              Username
            </Label>
            <Input
              id="username"
              type="text"
              placeholder="Choose a username"
              value={formData.username}
              onChange={(e) =>
                setFormData({ ...formData, username: e.target.value })
              }
              required
              className="bg-[#1f2937] border border-gray-600 text-white"
            />
          </div>

          <div>
            <Label htmlFor="email" className="text-gray-300 mb-3 block">
              Email Address
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="name@example.com"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
              className="bg-[#1f2937] border border-gray-600 text-white"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="password" className="text-gray-300 mb-3 block">
                Password
              </Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={formData.password}
                onChange={(e) => {
                  setFormData({ ...formData, password: e.target.value });
                  setShowPasswordWarning(e.target.value.length < 8);
                }}
                required
                className="bg-[#1f2937] border border-gray-600 text-white"
              />
            </div>

            <div>
              <Label
                htmlFor="confirmPassword"
                className="text-gray-300 mb-3 block"
              >
                Confirm
              </Label>
              <Input
                id="confirmPassword"
                type="password"
                placeholder="••••••••"
                value={formData.confirmPassword}
                onChange={(e) =>
                  setFormData({ ...formData, confirmPassword: e.target.value })
                }
                required
                className="bg-[#1f2937] border border-gray-600 text-white"
              />
            </div>
          </div>

          {showPasswordWarning && (
            <p className="text-xs text-yellow-500">
              Password looks weak (min 8 characters)
            </p>
          )}

          {/* ROLE SELECT BUTTONS */}
          <div>
            <p className="text-gray-300 mb-2">Role</p>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {["HR Admin", "Employee"].map((role) => {
                const isSelected = selectedUserType === role;

                return (
                  <button
                    key={role}
                    type="button"
                    onClick={() => setSelectedUserType(role)}
                    className={`border px-3 py-2 rounded-md transition-colors cursor-pointer ${
                      isSelected
                        ? "bg-blue-500 text-white border-blue-500"
                        : "text-blue-400 border-gray-500"
                    }`}
                  >
                    {role}
                  </button>
                );
              })}
            </div>
          </div>

          <Button
            type="submit"
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white mt-2"
          >
            Create Account
          </Button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-gray-400 text-sm">
            Already a member?{" "}
            <span
              onClick={() => onNavigate("login")}
              className="text-blue-400 cursor-pointer hover:text-blue-500"
            >
              Login here
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;

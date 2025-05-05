import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ClipboardList, LogIn, UserPlus, Home, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const HomePage = () => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <Home className="h-6 w-6 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">
                TaskMaster by Justin Hadinata
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <Button
                variant="ghost"
                className="flex items-center"
                onClick={() => navigate("/login")}
              >
                <LogIn className="mr-2 h-4 w-4" />
                Login
              </Button>
              <Button
                variant="ghost"
                className="flex items-center"
                onClick={() => navigate("/signup")}
              >
                <UserPlus className="mr-2 h-4 w-4" />
                Sign Up
              </Button>
            </div>
            <div className="md:hidden">
              <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right">
                  <div className="flex flex-col space-y-4 mt-8">
                    <Button
                      variant="ghost"
                      className="flex items-center justify-start"
                      onClick={() => {
                        navigate("/login");
                        setIsMobileMenuOpen(false);
                      }}
                    >
                      <LogIn className="mr-2 h-4 w-4" />
                      Login
                    </Button>
                    <Button
                      variant="ghost"
                      className="flex items-center justify-start"
                      onClick={() => {
                        navigate("/signup");
                        setIsMobileMenuOpen(false);
                      }}
                    >
                      <UserPlus className="mr-2 h-4 w-4" />
                      Sign Up
                    </Button>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>

      <main>
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
              Welcome to TaskMaster
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              A simple and effective way to manage your tasks and stay
              organized.
            </p>
            <div className="mt-8 flex justify-center">
              <Button
                className="flex items-center px-6 py-6 text-lg"
                onClick={() => navigate("/todo")}
              >
                <ClipboardList className="mr-2 h-5 w-5" />
                Get Started with Todo List
              </Button>
            </div>
          </div>
        </div>

        {/* Student Info */}
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <Card className="w-full max-w-md mx-auto">
            <CardHeader>
              <CardTitle>Student Information</CardTitle>
              <CardDescription>Developer details</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm font-medium text-gray-500">
                    Name:
                  </span>
                  <span className="text-sm text-gray-900">Justin Hadinata</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm font-medium text-gray-500">
                    Student ID:
                  </span>
                  <span className="text-sm text-gray-900">2702298236</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm font-medium text-gray-500">
                    Project:
                  </span>
                  <span className="text-sm text-gray-900">
                    TaskMaster Todo App
                  </span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-center">
              <Button variant="outline" size="sm">
                View More Details
              </Button>
            </CardFooter>
          </Card>
        </div>

        <div className="bg-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
              <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">
                Features
              </h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Everything you need to stay organized
              </p>
            </div>

            <div className="mt-10">
              <div className="grid gap-8 md:grid-cols-3">
                <Card>
                  <CardHeader>
                    <CardTitle>Task Management</CardTitle>
                  </CardHeader>
                  <CardContent>
                    Create, edit, and organize tasks with ease. Set priorities
                    and deadlines to ensure nothing falls through the cracks.
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Progress Tracking</CardTitle>
                  </CardHeader>
                  <CardContent>
                    Monitor your progress and see how much you've accomplished.
                    Celebrate your productivity milestones.
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Secure Access</CardTitle>
                  </CardHeader>
                  <CardContent>
                    Your tasks are private and secure. Access them from anywhere
                    with your account credentials.
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="text-lg font-semibold">
                TaskMaster by Justin Hadinata
              </h3>
              <p className="text-gray-300 text-sm mt-2">
                Student ID: 2702298236
              </p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-300 hover:text-white">
                Terms
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                Privacy
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                Contact
              </a>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-700 pt-4 text-sm text-gray-300 text-center">
            &copy; {new Date().getFullYear()} TaskMaster. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;

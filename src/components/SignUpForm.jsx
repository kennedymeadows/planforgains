import signUp from "@/firebase/auth/signup";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import logoPic from "@/images/logo.png";
import mealPrepPic from "@/images/meal-prep.jpg";
import Link from "next/link";
import googleSignIn from "@/firebase/auth/googlesignin";
import googleSignInLightNormal from "@/images/google_signin_buttons/web/1x/btn_google_signin_light_normal_web.png";
import googleSignInLightFocus from "@/images/google_signin_buttons/web/1x/btn_google_signin_light_focus_web.png";

export default function SignUpForm() {
  const [buttonImage, setButtonImage] = useState(googleSignInLightNormal);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleGoogleSignIn = async (event) => {
    event.preventDefault();
    const { result, error } = await googleSignIn();
    if (error) {
      return console.log(error);
    }
    console.log(result);
    return router.push("/dashboard");
  };

  const handleForm = async (event) => {
    event.preventDefault();

    const { result, error } = await signUp(email, password);

    if (error) {
      return console.log(error);
    }

    console.log(result);
    return router.push("/dashboard");
  };
  return (
    <>
      <div className="flex min-h-full flex-1">
        <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div>
              <Link href="/">
                <Image
                  className="h-10 w-auto"
                  src={logoPic}
                  alt="Your Company"
                />
              </Link>
              <h2 className="mt-8 text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Register
              </h2>
            </div>

            <div className="mt-10">
              <div>
                <form onSubmit={handleForm} className="space-y-6">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Email address
                    </label>
                    <div className="mt-2">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Password
                    </label>
                    <div className="mt-2">
                      <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        required
                        className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                      <label
                        htmlFor="remember-me"
                        className="ml-3 block text-sm leading-6 text-gray-700"
                      >
                        Remember me
                      </label>
                    </div>

                    <div className="text-sm leading-6">
                      <a
                        href="#"
                        className="font-semibold text-indigo-600 hover:text-indigo-500"
                      >
                        Forgot password?
                      </a>
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Sign in
                    </button>
                  </div>
                </form>
              </div>

              <div className="mt-10">
                <div className="relative">
                  <div
                    className="absolute inset-0 flex items-center"
                    aria-hidden="true"
                  >
                    <div className="w-full border-t border-gray-200" />
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-4 gap-4">
                  <button
                    onMouseEnter={() => setButtonImage(googleSignInLightFocus)}
                    onMouseLeave={() => setButtonImage(googleSignInLightNormal)}
                    onClick={handleGoogleSignIn}
                    className="col-span-2 col-start-2 mt-6"
                  >
                    <Image src={buttonImage} alt="Google Sign In" priority />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative hidden w-0 flex-1 lg:block">
          <Image
            className="absolute inset-0 h-full w-full object-cover"
            src={mealPrepPic}
            alt="Photo of meal prep, by Ella Olsson on Unsplash"
          />
        </div>
      </div>
    </>
  );
}

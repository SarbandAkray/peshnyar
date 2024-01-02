export default function LoginBox() {
  return (
    <div className="flex flex-col items-center justify-center min-w-screen  mt-11">
      <div className="w-[20rem] bg-lightGray rounded-t-md text-center p-3">
        <h1 className="text-white">Login</h1>
      </div>
      <div className="w-[20rem] bg-secondaryColor rounded-b-lg p-2 flex flex-col gap-4 pt-5">
        <div>
          <h1>username/email</h1>
          <input
            type="text"
            className="bg-white px-2 focus:outline-none rounded-md focus:border-redColor focus:border-2 focus:border- focus:ring-0 w-full"
          />
        </div>

        <div>
          <h1>password</h1>
          <input
            type="text"
            className="bg-white px-2 focus:outline-none rounded-md focus:border-redColor focus:border-2 focus:border- focus:ring-0 w-full"
          />
        </div>
        <div className="w-full flex flex-col items-center justify-start mt-5">
          <button
            className="bg-lightGray py-2 px-20 text-white focus:border-redColor focus:border-2 "
            onClick={() => (window.location.href = "/")}
          >
            Login
          </button>
        </div>

        <div className="w-full flex flex-col items-center justify-start mt-1">
          <h1 className=" text-lightGray focus:border-redColor focus:border-2 ">
            Need an account?
            <a
              href="/signup"
              className="font-bold underline underline-offset-4"
            >
              SIGN UP
            </a>
          </h1>
        </div>
      </div>
    </div>
  );
}

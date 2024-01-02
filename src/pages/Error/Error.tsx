import Head from "../signup/components/Head";

export default function Error() {
  return (
    <div className="w-screen min-h-screen bg-primaryColor flex flex-col items-center justify-center">
      <Head />
      <div className="flex flex-col items-center justify-center  gap-5">
        <h2 className="text-redColor text-3xl mt-6">404 page not found</h2>
        <p className="text-white text-xl">haji ghalat hati</p>
      </div>
    </div>
  );
}

import Nav from "../dashboard/components/Nav";
import AddContentForm from "./components/addContentForm";

export default function Contents() {
  return (
    <div>
      <Nav />
      <div>
        <div className="w-screen min-h-screen bg-primaryColor text-white  flex flex-col  items-center gap-2 pt-10 px-10 sm:px-44">
          <h1>Add Content</h1>
          <AddContentForm />
        </div>
      </div>
    </div>
  );
}

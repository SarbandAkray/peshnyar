import { useNavigate } from "react-router-dom";
import { Content } from "../../../globals";
import { postcoment } from "../services/postcoment";
import Comment from "./Comment";
export default function Comments({
  token,
  comments,
}: {
  comments: Content["reviews"];
  token: any;
}) {
  let navigate = useNavigate();
  return (
    <div>
      <section className="bg-gray-900 py-8 px-5 ">
        <div className="mx-auto px-5 w-full">
          <form
            className="mb-6 max-w-md"
            onSubmit={(e) => postcoment(e, token, navigate)}
          >
            <div className="py-2 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
              <label htmlFor="comment" className="sr-only">
                Your comment
              </label>
              <textarea
                id="comment"
                name="comment"
                rows={6}
                className="px-5 py-4 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
                placeholder="Write a comment..."
                required
              ></textarea>
            </div>
            <button className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800 bg-red-400">
              Post comment
            </button>
          </form>
          <div className="flex flex-wrap gap-4 ">
            {comments.map((comment) => (
              <Comment comment={comment} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

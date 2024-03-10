
import { Content } from "../../../globals";
import { baseBackendUrl } from "../../../global/api/api_url";


export default function Comment({
  comment,
}: {
  comment: Content["reviews"][0];
}) {
  function calculateLargestTimeUnit(commentTimestamp) {
    // Parse the comment timestamp to a Date object
    const time = Math.abs(
      new Date().getTime() - new Date(commentTimestamp).getTime()
    );

    const seconds = parseInt((time / 1000).toString());
    const minutes = parseInt((time / (1000 * 60)).toString());
    const hours = parseInt((time / (1000 * 60 * 60)).toString());
    const days = parseInt((time / (1000 * 60 * 60 * 24)).toString());
    const months = parseInt((time / (1000 * 60 * 60 * 24 * 30)).toString());
    const years = parseInt((time / (1000 * 60 * 60 * 24 * 30 * 12)).toString());

    // Determine the largest available time unit
    console.log(days);
    if (years > 0) {
      return years + " years";
    } else if (months > 0) {
      return months + " months";
    } else if (days > 0) {
      return days + " days";
    } else if (hours > 0) {
      return hours + " hours";
    } else if (minutes > 0) {
      return minutes + " minutes";
    } else {
      return seconds + " seconds";
    }
  }

  return (
    <article className="p-6 mb-3 text-base bg-white border-t border-gray-200 dark:border-gray-700 dark:bg-gray-900 rounded-md  md:w-80">
      <footer className="flex justify-between items-center mb-2">
        <div className="flex items-center">
          <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white font-semibold">
            <img
              className="mr-2 w-6 h-6 rounded-full"
              src={baseBackendUrl + comment.users.img_url}
              alt="Bonnie Green"
            />
            {comment.users.name}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            <time>{calculateLargestTimeUnit(comment.created_at)}</time>
          </p>
        </div>
        <button
          id="dropdownComment3Button"
          data-dropdown-toggle="dropdownComment3"
          className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 dark:text-gray-40 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          type="button"
        >
          <svg
            className="w-4 h-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 16 3"
          >
            <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
          </svg>
          <span className="sr-only">Comment settings</span>
        </button>

        <div
          id="dropdownComment3"
          className="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
        >
          <ul
            className="py-1 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownMenuIconHorizontalButton"
          >
            <li>
              <a
                href="#"
                className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Edit
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Remove
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Report
              </a>
            </li>
          </ul>
        </div>
      </footer>
      <p className="text-gray-500 dark:text-gray-400">{comment.comment}</p>
      <div className="flex items-center mt-4 space-x-4">
        <button
          type="button"
          className="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400 font-medium"
        >
          <svg
            className="mr-1.5 w-3.5 h-3.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 18"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 5h5M5 8h2m6-3h2m-5 3h6m2-7H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3v5l5-5h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"
            />
          </svg>
          Reply
        </button>
      </div>
    </article>
  );
}

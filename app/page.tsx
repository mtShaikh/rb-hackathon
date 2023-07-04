import Image from "next/image";

export default function Home() {
  return (
    <div>
      <ul className="max-w-md divide-y divide-gray-200 dark:divide-gray-700">
        <li className="pb-3 sm:pb-4">
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0">
              <Image
                className="w-8 h-8 rounded-full"
                src="https://img.freepik.com/free-vector/facebook-post-template-with-emoticons_1199-141.jpg?w=2000"
                alt="Neil image"
                height={50}
                width={50}
              />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                Sample Post 1
              </p>
              <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                sample content
              </p>
            </div>
            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
              View
            </div>
          </div>
        </li>
        <li className="py-3 sm:py-4">
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0">
              <Image
                className="w-8 h-8 rounded-full"
                src="https://img.freepik.com/free-vector/facebook-post-template-with-emoticons_1199-141.jpg?w=2000"
                alt="Neil image"
                height={50}
                width={50}
              />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                Sample Post 2
              </p>
              <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                sample content
              </p>
            </div>
            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
              View
            </div>
          </div>
        </li>
        <li className="py-3 sm:py-4">
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0">
              <Image
                className="w-8 h-8 rounded-full"
                src="https://img.freepik.com/free-vector/facebook-post-template-with-emoticons_1199-141.jpg?w=2000"
                alt="Neil image"
                height={50}
                width={50}
              />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                Sample Post 3
              </p>
              <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                sample content
              </p>
            </div>
            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
              View
            </div>
          </div>
        </li>
        <li className="py-3 sm:py-4">
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0">
              <Image
                className="w-8 h-8 rounded-full"
                src="https://img.freepik.com/free-vector/facebook-post-template-with-emoticons_1199-141.jpg?w=2000"
                alt="Neil image"
                height={50}
                width={50}
              />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                Sample Post 4
              </p>
              <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                sample content
              </p>
            </div>
            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
              View
            </div>
          </div>
        </li>
        <li className="pt-3 pb-0 sm:pt-4">
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0">
              <Image
                className="w-8 h-8 rounded-full"
                src="https://img.freepik.com/free-vector/facebook-post-template-with-emoticons_1199-141.jpg?w=2000"
                alt="Neil image"
                height={50}
                width={50}
              />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                Sample Post 5
              </p>
              <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                sample content
              </p>
            </div>
            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
              View
            </div>
          </div>
        </li>
      </ul>

      <a
        href="#"
        className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
      >
        Previous
      </a>

      <a
        href="#"
        className="inline-flex items-center px-4 py-2 ml-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
      >
        Next
      </a>
    </div>
  );
}

import Link from "next/link";

export default function CTA() {
  return (
      <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Say goodbye to boring meal prep.
            <br />
            Create your first meal plan today.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
            There's more to healthy eating than simply counting calories. Let us
            help you actually reach your goals while enjoying variety and
            finding new recipes you'll love.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/signup"
              className="rounded-md bg-blue-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              Get started
            </Link>
            <Link
              href="#"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Learn more <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
  );
}

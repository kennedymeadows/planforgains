// import { EllipsisHorizontalCircleIcon } from "@heroicons/react/24/outline"

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function RecipeCard({key, recipe }) {
  return (
    <>
        <li key={key} className="overflow-hidden rounded-xl border border-gray-200 list-none shadow-sm">
          <div className="flex items-center gap-x-4 border-b border-gray-900 bg-gray-100 p-6">
            <div className="text-base font-medium leading-6 text-gray-900">
              {recipe.name}
            </div>
            {/* Additional buttons or functionality can be added here */}
          </div>
          <dl className="-my-3 divide-y divide-gray-100 px-6 py-4 text-sm leading-6">
            <div className="flex justify-between gap-x-4 py-3">
              <dt className="text-gray-500">Portion Size</dt>
              <dd className="text-gray-700">{recipe.nutrition.portion_size}</dd>
            </div>
            <div className="flex justify-between gap-x-4 py-3">
              <dt className="text-gray-500">Calories</dt>
              <dd className="flex items-start gap-x-2">
                <div className="font-medium text-gray-900">
                  {recipe.nutrition.calories}
                </div>
              </dd>
            </div>
            <div className="flex justify-between gap-x-4 py-3">
              <dt className="text-gray-500">Fat</dt>
              <dd className="flex items-start gap-x-2">
                <div className="font-medium text-gray-900">
                  {recipe.nutrition.fat}
                </div>
              </dd>
            </div>
            <div className="flex justify-between gap-x-4 py-3">
              <dt className="text-gray-500">Protein</dt>
              <dd className="flex items-start gap-x-2">
                <div className="font-medium text-gray-900">
                  {recipe.nutrition.protein}
                </div>
              </dd>
            </div>
            <div className="flex justify-between gap-x-4 py-3">
              <dt className="text-gray-500">Carbs</dt>
              <dd className="flex items-start gap-x-2">
                <div className="font-medium text-gray-900">
                  {recipe.nutrition.carbs}
                </div>
              </dd>
            </div>
          </dl>
        </li>
    </>
  );
}

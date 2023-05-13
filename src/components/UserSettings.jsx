import { useEffect, useState } from 'react';
import getDocument from '@/firebase/firestore/getData';
import updateData from '@/firebase/firestore/updateData';
import { auth } from '@/firebase/config';

export default function UserSettings({ user }) {
    const [dietPreference, setDietPreference] = useState('healthy');
  
    useEffect(() => {
      const fetchUserDietPreference = async () => {
        const user = auth.currentUser;
        const { result, error } = await getDocument('users', user.uid);
  
        if (error) {
          console.log(error);
          return;
        }
        setDietPreference(result.data().dietPreference);
      };
  
      fetchUserDietPreference();
    }, []);
  
    const handleDietPreferenceChange = async (event) => {
      const newDietPreference = event.target.value;
      const user = auth.currentUser;
      const { result, error } = await updateData('users', user.uid, { dietPreference: newDietPreference });
  
      if (error) {
        console.log(error);
        return;
      }
  
      setDietPreference(newDietPreference);
    };
  
    return (
      <div>
        <label htmlFor="dietPreference" className="block text-sm font-medium leading-6 text-gray-900">
          Diet Preference
        </label>
        <select
          id="dietPreference"
          name="dietPreference"
          className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
          value={dietPreference}
          onChange={handleDietPreferenceChange}
        >
          <option value="health">healthy</option>
          <option value="low carb">Low Carb</option>
          <option value="high protein">High Protein</option>
          <option value="bulk">Bulk</option>
          <option value="keto">Keto</option>
          <option value="vegan">Vegan</option>
          <option value="vegetarian">Vegetarian</option>
        </select>
      </div>
    );
  }
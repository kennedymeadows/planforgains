import { useState, useEffect } from "react";

export default function FunFacts() {
  const facts = [
    {
      id: 1,
      name: "Historical Precedence",
      fact: "The idea of meal prep isn't new! Many ancient civilizations like the Romans and the Chinese practiced forms of meal preparation, especially when preparing for long journeys or large events.",
    },
    {
      id: 2,
      name: "Saved Time",
      fact: "It's estimated that people who meal prep can save up to 7 hours a week on food preparation and cooking. That's almost a full work day!",
    },
    {
      id: 3,
      name: "Food Waste Reduction",
      fact: "By planning meals ahead of time, you're more likely to use all the ingredients you buy, which can reduce food waste significantly.",
    },
    {
      id: 4,
      name: "Portion Control",
      fact: "Meal prepping allows you to control portions effectively which is essential in maintaining a healthy weight. It's easier to avoid overeating when your meals are pre-portioned.",
    },
    {
      id: 5,
      name: "Healthier Choices",
      fact: "Studies have shown that people who meal prep are more likely to eat healthier meals. It's easier to resist fast food when you've got a meal ready to go in the fridge.",
    },
    {
      id: 6,
      name: "Variety is the Spice of Life",
      fact: "Meal prep doesn't have to be boring. With a little creativity, you can make a wide variety of meals using the same basic ingredients. One chicken can be used for chicken salad, chicken stir-fry, and chicken tacos.",
    },
    {
      id: 7,
      name: "Money Saver",
      fact: "Meal prepping can save you money. When you plan your meals in advance, you can buy in bulk, take advantage of sales and reduce the temptation to eat out or order takeout.",
    },
    {
      id: 8,
      name: "Social Aspect",
      fact: "Some people enjoy turning meal prep into a social event. You can invite friends or family over, and everyone can help prep meals for the week. This not only makes the work go faster, but it also adds a fun, social element to the task.",
    },
    {
      id: 9,
      name: "Experimentation and Learning",
      fact: "Meal prepping provides a great opportunity to experiment with new recipes and learn about different cuisines. You can explore diverse diets like vegetarian, vegan, paleo, Mediterranean, and more.",
    },
    {
      id: 10,
      name: "Stress Relief",
      fact: "Knowing what you're going to eat for the week can alleviate the daily stress of figuring out what to cook for dinner. With your meals already prepared, you can relax and enjoy your evening without the hassle of cooking.",
    },
  ];
  const [currentFactIndex, setCurrentFactIndex] = useState(
    Math.floor(Math.random() * facts.length)
  );
  const [showFact, setShowFact] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setShowFact(false); // Hide the fact
      setTimeout(() => {
        // Change the fact and show it after a delay
        let newIndex;
        do {
          newIndex = Math.floor(Math.random() * facts.length);
        } while (newIndex === currentFactIndex);
        setCurrentFactIndex(newIndex);
        setShowFact(true); // Show the new fact
      }, 1000); // This delay should match the transition duration
    }, 8000); // Change the fact every 8 seconds

    return () => clearInterval(timer); // This clears the interval when the component unmounts
  }, [currentFactIndex]);

  return (
    <>
      <div className={`align-top transition-opacity duration-1000 ${showFact ? 'opacity-100' : 'opacity-0'}`}>
        <h2 className="align-top text-xl font-bold text-center mt-10">{facts[currentFactIndex].name}</h2>
        <p className="align-top font-medium mt-6">{facts[currentFactIndex].fact}</p>
      </div>
    </>
  );
}

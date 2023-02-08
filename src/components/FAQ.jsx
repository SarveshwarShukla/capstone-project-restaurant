import React from 'react'

const foodFaQData = [
  { question: "Do the fruits and vegetables reach me fresh?", answer: "Yes, we ensure that the fruits and vegetables reach you fresh. We partner with nearby fruit sellers and provide them a way to connect with more people to sell their fruits. We also provide them a way to sell their fruits online and get more customers. In the process, we ensure the eatables reaching to the common people stays as fresh as possible." },
  { question: "Why we should not eat fast foods?", answer: "Fast foods typically contain multiple chemicals and synthetic ingredients which are not good for the health. They can cause many health issues like obesity, heart diseases, etc." },
  {question: "How can we place an order?", answer: "You can place an order by signing up with your account and selecting the items you want to order. You can also contact us at 9898989898 and place your order manually."},
  { question: 'Where to contact if I have any queries?', answer: 'Feel free to contact us at contact@cprestaurant.com. We would be happy to assist you.' },

]

const FAQ = () => {
  return (
    <div className="mt-[100px]" id="faq">
      <h1 className="text-center text-4xl font-semibold mb-20">Frequently asked questions</h1>
      <div className="bottom flex gap-5 flex-col w-[600px] m-auto">
        {foodFaQData.map((item, index) => (
          <div key={index} className="bg-orange-500 px-20 py-10 rounded-md">
            <p className='text-xl font-semibold'>{item.question}</p>
            <p className='text-xl mt-2 text-gray-800'>{item.answer}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FAQ
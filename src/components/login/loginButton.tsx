'use client';

import Image from 'next/image';

interface LoginButtonProps {
  service: string;
  imageUrl: string;
  altText: string;
  bgColor: string;
}

const LoginButton: React.FC<LoginButtonProps> = ({ service, imageUrl, altText, bgColor }) => {
  const login = async () => {
    try {
      const response = await fetch(`https://login/${service}`);
      const answer = await response.json();
      
      if (answer.code === 200) {
        console.log(answer.result);
        return answer.result;
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div
      className={`flex flex-row w-fit px-20 py-3 rounded-3xl justify-center items-center ${bgColor} my-2 transform hover:scale-105 transition duration-300 cursor-pointer`}
      onClick={login}
    >
      <Image src={imageUrl} width={40} height={55} alt={altText} />
      <p className="text-black font-bold text-2xl">continue with {service}</p>
    </div>
  );
};

export default LoginButton;

import React from 'react';

export default function Weather() {


  const getWeatherData = async () => {
    const url = `/widget/weather`;
    const res = await axios.get(url);
    console.log(res);

  }

  useEffect(() => {

    hamin();
  });

  return (
    <div>

    </div>
  );
};


import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Weather() {
  const [state, setState] = useState({
    high: '',
    low: '',
    pty: '',
  })

  const getWeatherData = async () => {
    const url = `/widget/weather`;
    const res = await axios.get(url);
    console.log(res);
    try {
      if (res.status === 200) {
        setState({
          ...state,
          pty: res.data.pty,
          high: res.data.high,
          low: res.data.low,
        });
        console.log("날씨 조회 성공!");
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getWeatherData();
  });

  return (
    <div>
      {state.pty} {state.high} {state.low}
    </div>
  );
};


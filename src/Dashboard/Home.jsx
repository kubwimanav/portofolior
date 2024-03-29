import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { curveCardinal } from 'd3-shape';
import './Dashstyles/Dashhome.css'
function Home() {



    return (
      <>
        <div className='datalength'>
          <p>
            {data.length}
          </p>
        </div>

      </>
    );
}
export default Home;


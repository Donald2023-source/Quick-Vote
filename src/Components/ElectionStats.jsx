import { twMerge } from "tailwind-merge"
import DonutChart from 'react-donut-chart';

const ElectionStats = ({className}) => {
    return (
        <div className={twMerge('border w-full', className)}>


<DonutChart
  data={[
    {
      label: 'Give you up',
      value: 25,
    },
    {
      label: '',
      value: 75,
      isEmpty: true,
    },
  ]}
/>;
        </div>
    )
}
export default ElectionStats
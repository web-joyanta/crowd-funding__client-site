import { useLoaderData } from 'react-router-dom';
import CardCampaign from '../components/CardCampaign';

const AllCampaign = () => {
    const loaderData = useLoaderData();
    const dataReverse = [...loaderData].reverse();
    // console.log(dataReverse);
    return (
        <div className="max-w-7xl mx-auto px-5 mt-7">
            <h2 className="text-3xl md:text-4xl font-bold mt-20">All Campaigns</h2>
            <p className="text-[#4B5563] mt-5">Discover campaigns from around the world and support causes you care about.</p>

            <div className='flex flex-col md:flex-row justify-between gap-5 shadow-xl px-5 pt-6 pb-10 mt-10 rounded-xl'>
                <label className="input w-full ">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="2.5"
                            fill="none"
                            stroke="currentColor"
                        >
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.3-4.3"></path>
                        </g>
                    </svg>
                    <input type="search" required placeholder="Search" />
                </label>
                <select defaultValue="Filter Types" className="select w-full md:w-1/3">
                    <option disabled={true}>Filter Types</option>
                    <option>Personal Issue</option>
                    <option>Startup</option>
                    <option>Business</option>
                    <option>Creative Ideas</option>
                </select>
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 mt-12">
                {
                    dataReverse.map(campaign => <CardCampaign key={campaign._id} campaign={campaign}></CardCampaign>)
                }
            </div>
        </div>
    );
};

export default AllCampaign;
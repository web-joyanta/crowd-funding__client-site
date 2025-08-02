import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const TableCampaign = ({ campaign, myCampaigns, setMyCampaigns }) => {
    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://backend-crowd-funding.vercel.app/campaigns/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            Swal.fire(
                                'Deleted!',
                                'Your campaign has been deleted.',
                                'success'
                            );
                            const remainingCampaigns = myCampaigns.filter(cam => cam._id !== id);
                            setMyCampaigns(remainingCampaigns);
                        }
                    });
            }
        });
    };
    const shortText = campaign.description
        ? campaign.description.slice(0, 50) + (campaign.description.length > 100 ? '...' : '')
        : '';

    return (
        <tr className="border-t border-[#d6d6d6]">
            <td className="py-2 px-4 truncate">
                <div className="flex items-center gap-3">
                    <img
                        src={campaign.photo}
                        className="w-12 h-12 object-cover rounded"
                        alt={campaign.title}
                    />
                    <div className="flex-1 min-w-0">
                        <div className="font-medium">{campaign.title}</div>
                        <div className="text-xs text-gray-500 truncate">{shortText}</div>
                    </div>
                </div>
            </td>
            <td className="py-2 px-4">
                <span className="inline-block px-4 py-1 bg-[#DBEAFE] text-xs font-medium text-[#1E40AF] rounded-2xl">
                    {campaign.campaignType}
                </span>
            </td>
            <td className="py-2 px-4">{campaign.date}</td>
            <td className="py-2 px-4 text-right">
                <div className="flex gap-2 justify-end">
                    <Link to={`/updateCampaign/${campaign._id}`}>
                        <button className="btn btn-sm btn-primary">Update</button>
                    </Link>
                    <button onClick={() => handleDelete(campaign._id)} className="btn btn-sm btn-error">Delete</button>
                </div>
            </td>
        </tr>
    );
};

export default TableCampaign;
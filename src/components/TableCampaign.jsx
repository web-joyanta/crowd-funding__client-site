const TableCampaign = ({ campaign }) => {
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
                    <button className="btn btn-sm btn-primary">Update</button>
                    <button className="btn btn-sm btn-error">Delete</button>
                </div>
            </td>
        </tr>
    );
};

export default TableCampaign;
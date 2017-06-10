namespace Alten.VehiclesConnect.Web.Models
{
    public class FindVehiclelFilterRequest
    {
        public string SortExpression { set; get; }
        public int? PageIndex { set; get; }
        public int? PageSize { set; get; }
        public int? CustomerId { set; get; }
        public string Status { set; get; }
    }
}
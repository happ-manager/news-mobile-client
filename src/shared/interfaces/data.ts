interface IDataResponse<T> {
	data: T;
	totalCount: number;
	page: number;
}

export default IDataResponse;

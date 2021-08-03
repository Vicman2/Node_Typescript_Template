function formatMessage(objectOrMessage: any) {
	if (typeof objectOrMessage === "string") return objectOrMessage;

	if (typeof objectOrMessage === "object" && objectOrMessage.message) {
		return objectOrMessage.message;
	}

	return "";
}

function createResponse(objectOrMessage: any, data:any = null, success:boolean = false) {
	return {
		message: formatMessage(objectOrMessage),
		data,
		success: success === null ? true : success
	};
}

export default createResponse;

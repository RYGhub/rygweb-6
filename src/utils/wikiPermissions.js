export function canView(loginStatus, wikiData) {
	if(wikiData.role_to_view === "*") return true;
	if(!loginStatus) return false;
	return loginStatus.user.roles.includes(wikiData.role_to_view);
}

export function canEdit(loginStatus, wikiData) {
	if(wikiData.role_to_edit === "*") return true;
	if(!loginStatus) return false;
	return loginStatus.user.roles.includes(wikiData.role_to_edit);
}

export function canCreate(loginStatus) {
	if(!loginStatus) return false;
	return loginStatus.user.roles.includes("member");
}

export function canDelete(loginStatus) {
	if(!loginStatus) return false;
	return loginStatus.user.roles.includes("admin");
}

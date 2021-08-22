
export class User {
    
    constructor(user=null) {
        this.uid = user&&user.uid||user;
        this.permissionLevel = user&&user.permissionLevel||user;
        this.userName = user && user.userName || user;
        this.displayName = user&&user.displayName||user;
        this.email = user&&user.email||user;
        this.gitUserName = user&&user.gitUserName||user;
        this.gitpassword = user&&user.gitpassword||user;
        this.workspaces = user&&user.workspaces||user;       
     }
}
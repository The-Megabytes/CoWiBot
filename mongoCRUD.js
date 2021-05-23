import { Usermodel } from "./schemas/UserSchema";


export async function createUser(userID, userData) {
    const info = {
        userID: userID,
        districtID: userData.district,
        
    };

    try {
        let obj = await DataModel.create(info);
        obj.save();
        return String(obj);
    } catch (error) {
        console.log(error);
    }
}

export async function readUserData(userID) {
    try {
        let obj = await Usermodel.findOne({ userID: userID });

        return obj;
    } catch (error) {
        console.log(error);
    }
}


export async function updateUserData(userID, data) {
    const filter = { userID: userID };
    try {
        await Usermodel.findOneAndUpdate(filter, data, { upsert: true });
    } catch (error) {
        console.log(error);
    }
}

export async function deleteUserData(userID) {
    try {
        await DataModel.deleteOne(userID);
    } catch (error) {
        console.log(error);
    }
}




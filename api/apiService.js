import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';

export const idUser = ()=>{
    const uid = auth().currentUser.uid;
    return {uid};
}


export const sbmitUsers = (Id, Old,Sex,Country,Location,uid) => {
    return new Promise(function (resolve, reject) {
        let key;
        if (Id != null) {
            key = Id;
        }
        else {
            key = database()
                .ref()
                .push.key;
        }
        const dataToData = {
            Id: key,
            old: Old,
            sex:Sex,
            country:Country,
            location:Location
        };
        database()
            .ref(`users/${uid}/information`)
            .update(dataToData)
            .then((snapshot) => {
                resolve(snapshot)
            }).catch((err) => {
                reject(err)
            });


    });
};

export const healthCare = (Id, wight,height,uid) => {
    return new Promise(function (resolve, reject) {
        let key;
        if (Id != null) {
            key = Id;
        }
        else {
            key = database()
                .ref()
                .push.key;
        }
        let dataToData = {
            Id: key,
            wight:wight,
            height:height

            
        };
        database()
            .ref(`users/${uid}/healthCare`)
            .update(dataToData)
            .then((snapshot) => {
                resolve(snapshot)
            }).catch((err) => {
                reject(err)
            });


    });
};

export const healthIndex = (Id, spo2,nhiptim,uid) => {
    return new Promise(function (resolve, reject) {
        let key;
        if (Id != null) {
            key = Id;
        }
        else {
            key = database()
                .ref()
                .push.key;
        }
        let dataToData = {
            Id: key,
            spo2:spo2,
            nhiptim:nhiptim

            
        };
        database()
            .ref(`${uid}/healthCare`)
            .update(dataToData)
            .then((snapshot) => {
                resolve(snapshot)
            }).catch((err) => {
                reject(err)
            });


    });
};
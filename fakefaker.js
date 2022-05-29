function GetFakeData(types){
    if(types='Name'){
        XingShiNumber=Math.floor((Math.random()*10)+1)
        if(XingShiNumber==1){
            XingShi="王"
        }else if(XingShiNumber==2){
            XingShi="李"
        }else if(XingShiNumber==3){
            XingShi="赵"
        }else if(XingShiNumber==4){
            XingShi="冯"
        }else if(XingShiNumber==5){
            XingShi="杨"
        }else if(XingShiNumber==6){
            XingShi="张"
        }else if(XingShiNumber==7){
            XingShi="唐"
        }else if(XingShiNumber==8){
            XingShi="沈"
        }else if(XingShiNumber=9){
            XingShi="邢"
        }else if(XingShiNumber=10){
            XingShi="周"
        }
        nn=Math.floor((Math.random()*5)+1)
        if(nn==1){
            nm="春生"
        }else if(nn==3){
            nm="维"
        }else if(nn==2){
            nm="志远"
        }else if(nn==4){
            if(XingShiNumber==9){
                nm="靖平"
            }else{
                nm="峰"
            }
        }else if(nn==5){
            nm="出"
        }
        var Names=XingShi+nm
        return Names
    }
}
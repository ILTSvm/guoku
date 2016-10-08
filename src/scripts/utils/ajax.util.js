    function useAjax(url,callback,dataJson){
        $.ajax({
            url:url,
            data:dataJson,
            success:function(data) {
                console.log(data);
                callback(data);
            },
            error:function(){
                alert("ajax error");
            },
            //data  array,
            dataType:"json",
            type:"post"
        })
    }
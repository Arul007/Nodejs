var str = 'Afghanistan,AFG,"2005 PPP conversion factor, GDP (LCU per international $)",PA.NUS.PPP.05';
var arr = str.match(/(".*?"|[^",\s]+)(?=\s*,|\s*$)/g);
arr = arr || [];
for (var i = 0; i < arr.length; i++) console.log('arr['+i+'] =',arr[i]  );

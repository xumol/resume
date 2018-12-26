//导入另一个js模块中的成员
import{getcompanyName} from './util';

//导入另两个css模块文件
import '../css/base.css';
import '../css/page.css';

//创建一个div元素
var div=document.createElement('div');
//设置div元素内部的文字
div.innerHTML= "版权所有2018："+getcompanyName();
//修改div元素的clas
div.className="box";

//把div元素追加为body的孩子
document.body.appendChild(div);

  
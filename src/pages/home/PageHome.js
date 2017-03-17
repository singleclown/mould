require('./PageHome.styl');
const classNames = require('classnames');
const reactMixin = require('react-mixin');
const numberRegExp = /^(\d+\.\d*)|(\d+\.)|\d+/;
const {Boxs,Button,Group,TextField,Toast} = SaltUI;
let HBox = Boxs.HBox;
let Box = Boxs.Box;

class PageHome extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
             t2: '',
             number: '',
             click:false
        };
    }

    handleClick(options) {
        this.setState(prevState=>({click:!prevState.click}));
    }

    handleLink() {
        
    }
  handleNumberChange(newValue) {
    this.setState({
      number: newValue
    });
  }

  numberFilter(originValue) {
    let matches = originValue.match(numberRegExp);
    let number = '';
    if (matches) {
      number = matches[0];
    }
    return number;
  }
  handleSumbmit(){
    location.hash = "order";

  }
  handleNumberBlur(originValue) {
    this.setState({
      number: originValue.replace(/\.$/, '').replace(/^0*([0-9]+)/, '$1')
    });
  }
    render() {
        let t = this;
        return (
            <div className="page-home">
                <div className="t-FAC form">
                    <div>首次登陆请验证</div>
                 <HBox>
                        <Box flex={1} className="t-FAC t-PL10" >
                             <Group.List >
                                  <TextField  placeholder="输入您的手机号码"filter={t.numberFilter.bind(t)}value={t.state.number}
                                    onBlur={t.handleNumberBlur.bind(t)}onChange={t.handleNumberChange.bind(t)}/>
                             </Group.List >       
                        </Box>
                        <Box flex={0.5} className="t-FAC t-ML20 t-MR20 ft12">
                           <Button className={classNames('t-FL btn-styl',{'vercode':t.state.click})} type="text" onClick={t.handleClick.bind(t)} >发送验证码</Button>
                        </Box>                     
                    </HBox>
                 <HBox>
                        <Box flex={1} className="t-FAC t-PL10" >
                             <Group.List >
                                 <TextField  placeholder="输入您的验证码"filter={t.numberFilter.bind(t)}value={t.state.number}
                                    onBlur={t.handleNumberBlur.bind(t)}onChange={t.handleNumberChange.bind(t)}/>
                             </Group.List >       
                        </Box>
                        <Box flex={0.5} className="t-FAC t-ML20 t-MR20 ft12">
                           <Button className="t-FL btn-styl" type="text" onClick={t.handleClick}>重新获取</Button> 
                        </Box>                     
                    </HBox> 
                    <div><div className="putin" onClick={t.handleSumbmit.bind(t)}>提交</div></div>  
                  </div>
            </div>
        );
    }
}

module.exports = PageHome;

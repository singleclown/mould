require('./PageOrder.styl');

const reactMixin = require('react-mixin');
const Actions = require('./actions');
const Store = require('./store');
const {Boxs,Group,TextField,SelectField,TextareaField,Avatar} = SaltUI;
let HBox = Boxs.HBox;
let Box = Boxs.Box;
const dataArray = [
  { value: 0, text: '请选择' }, { value: 1, text: '型号一' },
  { value: 2, text: '型号二' }, { value: 3, text: '型号三' },
];
class Order extends React.Component {
    constructor(props) {
        super(props);
         this.state = {
              value: null,
              t1: '',
              t2: ''
    };
    }
    handleChange(value) {
        this.setState({
           value: value
        });
   }
    handleTextChange(name, newValue) {
        this.setState({
           [name]: newValue
        });
   }
    render() {
        let t = this;
        return (
            <div className="order">
                <Group>
                 <Group.Head className='t-FS14 t-LH1_5 t-LH20'>货品明细(1)</Group.Head>
                        <Group.List >
                            <SelectField
                                label="型号"
                                options={dataArray}
                                onSelect={this.handleChange.bind(t)}
                                value={this.state.value}
                                placeholder="请选择(必填)"
                            />
                            <TextField
                                label="数量"
                                placeholder="请输入(必填)"
                                value={t.state.t1}
                                onChange={t.handleTextChange.bind(t, 't1')}
                            />
                    </Group.List>
                  </Group>
                    <Group>
                 <Group.Head className='t-FS14 t-LH1_5 t-LH20 t-PT10 t-PB10 t-PL18'>总数量</Group.Head>
                        <Group.List >
         <TextareaField layout="v" label="备注" minRows={4} maxRows={6}
            placeholder=""
            value={t.state.t2}
            onChange={t.handleChange.bind(t, 't2')}/>
                    </Group.List>
                  </Group>
           <Group>
                    <Group.List itemIndent={10} lineIndent={[10, 10]} borderTopNone={true}>
                        <div>企业联系人</div>
                      <HBox>
                        <Box flex={1} className="t-FAC t-PL10" >
                             <Group.List >
                                  <Avatar  size="60" name="头像"/>
                             </Group.List >       
                        </Box>
                        <Box flex={3} className="t-FAC t-ML20 t-MR20 ft12">
                           <div style={{padding:'15px'}}>李铁牛<p style={{marginTop:'8px'}}>杭州皓天信息技术有限公司</p></div>
                        </Box>                     
                    </HBox>
                    </Group.List>
                  </Group>
                   <div className='t-FAC submit'>提交</div>
            </div>
        );
    }

    componentWillMount() {
    }

    componentDidMount() {
    }

    componentWillReceiveProps(nextProps) {
    }

    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
    }

    componentDidUpdate(prevProps, prevState) {
    }

    componentWillUnmount() {
    }
}

reactMixin.onClass(Order, Reflux.connect(Store));

module.exports = Order;

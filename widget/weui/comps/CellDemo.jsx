import React from 'react';
import ReactDOM from 'react-dom';
import WeUI from 'react-weui';
import Page from 'reactdemo:widget/weui/comps/page.jsx';

const { ButtonArea,
        Button,
        CellsTitle,
        Cells,
        Cell,
        CellsTips,
        CellHeader,
        CellBody,
        CellFooter
        } = WeUI;
const ImageIcon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAAAAXNSR0IArs4c6QAABIpJREFUaAXtWk9IVEEYn2/LSomIiAJDMLU6GWkQ/TtoGQSdDDL04iYdulqXDhF76FBQdO0Q/iFIMqhLQaCmh0oI0sgumlYQGkVERGilven7vX2zvre7rr6debgub2D3zXvzfd/8fvPNm/m+4QkRlnAEcnoEKB26A60vCr/9mD4qhagUUq5NJ5Mzz4j+MImRzRuL+gZvHpxJxpVCcNfZ3t2zs+K+EHJnsnBu39NYQYE4NXq77o0bp4cgPPfl+/RrkCNBw+zBJxGSf90KuVa3JK1hEselkFVC0NjWTUV73J5c7QaMaanIlWxftW8gVjvnbs/Vek2s//KnD/9egmScg3iksEZUBVf7nYtfn6wUcsANrJhtqCsOqKN4CKoFJdenZRy69z+BOWlR9BL06uTFXUhwpbsx9GDowRwfgbyfop5IJghnSClpR8vTKkuIXWTJYvQhIzTFIzv6ru3IMBHx3hxcCYxg+bnnW+TM74sV0b4GDqG2gUKCiSUFExbcNlnW3NdNheuuTtw69DUImoFM0fLm3gtiZmZCCKvVJkf0kQPiLorQDfvHdcHP4sStVsjaOgEwNOrBmmj/uk9yro2BNwIrZyQPmdCV8fajQ+mwV5zpq5aWvMTy9dx+vby5Z28JrW4Z6Kj9nU4+m2dGCcbJiUb21k+ejk0TnXWPM4FyiJ8sa+45wTp3WaeRbUClKZOenzZjUxRTDABtciQOv+88lpGcGyRkJes4A9NocroaIYgFhQHHABqee99xbAR1PwU60HV0Yo5NPybSyhohiNWS36P1eOf8eC4ZEXRhA7ZgM7k9m3ttgtjniKzT6BwLSjYg3DrKBgnZANvutmzq2gQrov3VUopiLPsLrZZ+gNk2nC0Etv3oppPVJigj8dM3knIwXQfZPFO2lO1sbCgdbYIq/BIcfimj2lfHVsK2hkFtghp9L6pK/CIuKrSIgDZBBM52H04gvUh/S2uWwo5dLaLPS1NYWEqbIFk0BvO8lh5YuBt/Ley2/dBgcKP+NFOltQmOd9QO8VSa4iPHUsSWqV34e2LbYFu8H04infKnnSqtTRD5nJSRezCNwDm1C39PlA0pqNtErqhNEPCLCuQ1HvFfyAoQOPujNC8NXdiALeSI8y3Z14wQfHu77gtDiAEGsoKyaE8l6n4KdKDr6MRMJcBGCAIUp0Y3GGAXLxAb+BDimR9P2ukS69i6bAO2/AxOJlljBNEJklVFkm8fcdrzINPCgzbIQFaRgw3YMlWMJrxOJt7EoF8xwBjeJ1406suivR/t8Mu1Z2JbsSyrFETwzkEenuNzDqPFKEGFDEA5n7sjOOVBpsHLbCl7qFTwYVOicISO7cVegQM8dAqEIEg4i8R5JnfBzjg4KFexJaIfBAjj7dhDV+ixofKUQwBTFj9PoU7PbSA3RheZQBBqGg0Jag7gsquHHlx2F2gCCD2oOYDLru71IH/YBkT4PGrZkfkEkMDscFDqHoIcKNtH7nw9zp9HBRblqM5NXYEVmGFPcVC2+X6+5OPHeB6CoJrXn1MqX+bTB7GKU3gNRyBHR+A/KFjbvWAqMXEAAAAASUVORK5CYII=';

class CellDemo extends React.Component {

    render() {
        return (
            <Page className="cell" title="Cell">
                <CellsTitle>带说明的列表项</CellsTitle>
                <Cells>
                    <Cell>
                        <CellBody>
                            标题文字
                        </CellBody>
                        <CellFooter>
                            说明文字
                        </CellFooter>
                    </Cell>
                </Cells>

                <CellsTitle>带图标、说明的列表项</CellsTitle>
                <Cells>
                    <Cell>
                        <CellHeader>
                            <img src={ImageIcon} alt="" style={{display: `block`, width: `40px`, marginRight: `10px`}}/>
                        </CellHeader>
                        <CellBody>
                            标题文字
                        </CellBody>
                        <CellFooter>
                            说明文字
                        </CellFooter>
                    </Cell>
                    <Cell>
                        <CellHeader>
                            <img src={ImageIcon} alt="" style={{display: `block`, width: `40px`, marginRight: `10px`}}/>
                        </CellHeader>
                        <CellBody>
                            标题文字
                        </CellBody>
                        <CellFooter>
                            说明文字
                        </CellFooter>
                    </Cell>
                </Cells>

                <CellsTitle>带说明、跳转的列表项</CellsTitle>
                <Cells access>
                    <Cell href="javascript:;">
                        <CellBody>
                            标题文字
                        </CellBody>
                        <CellFooter>
                            说明文字
                        </CellFooter>
                    </Cell>
                    <Cell>
                        <CellBody>
                            标题文字
                        </CellBody>
                        <CellFooter>
                            说明文字
                        </CellFooter>
                    </Cell>
                </Cells>

                <CellsTitle>带图标、说明、跳转的列表项</CellsTitle>
                <Cells access>
                    <Cell href="javascript:;">
                        <CellHeader>
                            <img src={ImageIcon} alt="" style={{display: `block`, width: `40px`, marginRight: `10px`}}/>
                        </CellHeader>
                        <CellBody>
                            标题文字
                        </CellBody>
                        <CellFooter>
                            说明文字
                        </CellFooter>
                    </Cell>
                    <Cell>
                        <CellHeader>
                            <img src={ImageIcon} alt="" style={{display: `block`, width: `40px`, marginRight: `10px`}}/>
                        </CellHeader>
                        <CellBody>
                            标题文字
                        </CellBody>
                        <CellFooter>
                            说明文字
                        </CellFooter>
                    </Cell>
                </Cells>

                <ButtonArea>
                    <Button>确定</Button>
                    <Button type="default">取消</Button>
                </ButtonArea>
            </Page>
        );
    }
};

export default CellDemo
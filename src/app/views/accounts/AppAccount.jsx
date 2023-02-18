import { SimpleCard } from 'app/components';
// import CollapsibleTable from '../material-kit/tables/CollapsibleTable';
import { Container } from '../material-kit/tables/AppTable';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { getAccountList } from 'app/redux/actions/AccountAction';
import { useEffect } from 'react';
import { tableHeader } from 'app/utils/constant';
import Loadable from 'app/components/Loadable';
import { lazy } from 'react';

const CollapsibleTable = Loadable(
    lazy(() => import('../material-kit/tables/CollapsibleTable')),
);

function AppAccount(props) {
    const { getAccountList, accounts } = props;

    useEffect(() => {
        getAccountList();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <Container>
            <SimpleCard title="Quản lý tài khoản">
                <CollapsibleTable
                    tableHeader={tableHeader}
                    rows={accounts.accountList}
                />
            </SimpleCard>
        </Container>
    );
}
const mapStateToProps = (state) => ({
    getAccountList: PropTypes.func.isRequired,
    accounts: state.accounts,
});
export default connect(mapStateToProps, { getAccountList })(AppAccount);

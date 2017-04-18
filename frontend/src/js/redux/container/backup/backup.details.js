import { connect } from 'react-redux';
import BackupDetails from '../../../ui/backup/backup.details';
import object from '../../../utility/object';


const mapStateToProps = (state, ownProps) => {
    const backupConfigs = state.get("data").getIn(["backupConfigs", "data"]);
    const id = ownProps.params.backupId;

    const backupConfig = object.filterArrWithKeyValue("id", id, backupConfigs)[0];

    const allCopyDBs = state.get("data").getIn(["copyDBs", "data"]);
    const copyDBs = object.filterArrWithKeyValue("id", id, allCopyDBs);

    const idOpts = backupConfigs.map(backupConfig => backupConfig.id);

    console.log(id, backupConfigs, copyDBs, idOpts);

    return {
        backupConfig,
        copyDBs,
        idOpts
    }
};

const mapDispatchToProps = (dispatch) => {
    return {

    };
};

const Container = connect(mapStateToProps, mapDispatchToProps)(BackupDetails);

export default Container;
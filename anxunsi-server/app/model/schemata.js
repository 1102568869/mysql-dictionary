const sys_dbs = require('../common/consts.js').sys_dbs;

module.exports = app => {
    const {STRING, Op} = app.Sequelize;
    const Schemata = app.model.define('schemata', {
        catalogName: {
            type: STRING(200),
            // primaryKey: true,
            //autoIncrement: true
            field: 'catalog_name'
        },
        schemaName: {
            type: STRING(200),
            field: 'schema_name'
        },
        defaultCharacterSetName: {
            type: STRING(200),
            field: 'default_character_set_name'
        },
        defaultCollationName: {
            type: STRING(200),
            field: 'default_collation_name'
        },
        sqlPath: {
            type: STRING(200),
            field: 'sql_path'
        },
    }, {
        timestamps: false,
        freezeTableName: true
    });
    Schemata.removeAttribute('id');

    Schemata.findBySchemaName = async function (schemaName) {
        return await this.findOne({
            where: {
                schemaName
            }
        })
    };
    Schemata.findAllSchematas = async function () {
        return await this.findAll({
            where: {
                schema_name: {
                    [Op.notIn]: sys_dbs,
                }
            },
            order: [['schema_name', 'asc']]
        });
    };

    return Schemata;
};

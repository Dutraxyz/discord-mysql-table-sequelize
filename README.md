# discord-mysql-table-sequelize
Comando base para você fazer o que pretender. Com isto você pode puxar a tabela de um MySQL pelo seu bot no discord. 

OBS: Você precisa criar os modulos do seu sequelize!
Exemplo de módulo do sequelize desta mesma tabela que está no código:

```javascript
const { Model, DataTypes, literal } = require("sequelize");


module.exports = class Character extends Model {
    static init(sequelize) {
        return super.init(
            {
                id: {
                    type: DataTypes.INTEGER(255),
                    unique: true,
                    autoIncrement: true,
                    primaryKey: true,
                    default: null
                },
                user: { type: DataTypes.STRING, default: "Nenhum" },
                nome: { type: DataTypes.STRING, default: "Nenhum" },
                sobrenome: { type: DataTypes.STRING, default: "Nenhum" },
                vida: { type: DataTypes.INTEGER(255), default: "Nenhum" },
                colete: { type: DataTypes.INTEGER(255), default: "Nenhum" },
                fome: { type: DataTypes.INTEGER(255), default: "Nenhum" },
                sede: { type: DataTypes.INTEGER(255), default: "Nenhum" },
                peso: { type: DataTypes.INTEGER(255), default: "Nenhum" },
                altura: { type: DataTypes.INTEGER(255), default: "0" },
                idade: { type: DataTypes.INTEGER(255), default: "0" },
                numeroCelular: { type: DataTypes.STRING, default: "0" },
                carteira: { type: DataTypes.INTEGER(255), default: "Nenhum" },
                banco: { type: DataTypes.INTEGER(255), default: "Nenhum" },
                dinheirosujo: { type: DataTypes.INTEGER(255), default: "Nenhum" },
                grupos: { type: DataTypes.INTEGER(255), default: "Nenhum" },
                ultimologin: { type: "TIMESTAMP", default: literal("CURRENT_TIMESTAMP") },
                prisaoAdmin: { type: DataTypes.INTEGER(11) },
                minutosJogados: { type: DataTypes.INTEGER(11) }
            },
            { tableName: "characters", timestamps: false, sequelize }
        );
    }
};
```

[CustomAttribute("JG", "Foolin' around with custom attributes ...")]
public class Configuration {
    public int MaxUsersCount { get ; set ; }
    public int MinUserNameLength { get ; set ; }
    public int MaxUserNameLength { get ; set ; }
    public int MinUserPasswordLength { get ; set ; }
    public int MaxUserPasswordLength { get ; set ; }

    public static void Save(Configuration configuration, stringconfigFilePath) {
        throw new NotImplementedException();
    }

    public static Configuration Load(string configFilePath) {
        throw new NotImplementedException () ;
    }

    public static void Save (Configuration configuration, string configFilePath) {
        XmlSerializer xmlSerializer = new XmlSerializer ( typeof ( Configuration ) ) ;
        using (var streamWriter = new StreamWriter(configFilePath)) {
            xmlSerializer.Serialize(streamWriter, configuration);
        }
    }

    public static ConfigurationLoad (string configFilePath) {
        XmlSerializer xmlSerializer = new XmlSerializer (typeof (Configuration));
        using (var streamReader = new StreamReader (configFilePath)) {
            return (Configuration) xmlSerializer.Deserialize(streamReader);
        }
    }
}
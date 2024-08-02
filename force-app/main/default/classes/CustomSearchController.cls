public class CustomSearchController {
    @AuraEnabled
    public static List<String> searchForIds(String searchText) {
      return new List<String>{searchText};
    }
}
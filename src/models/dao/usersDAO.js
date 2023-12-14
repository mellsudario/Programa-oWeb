class usersDAO {
    static async insertUser(client, user) {
      try {
        const result = await client
          .db("beatrater")
          .collection("br")
          .insertOne(user);
        return result;
      } catch (err) {
        console.log(err);
        throw err; 
      } finally {
        await client.close();
      }
    }
  
    static async getUserByEmail(client, email) {
      try {
        const result = await client
          .db("beatrater")
          .collection("br")
          .findOne({ email: email });
        return result;
      } catch (err) {
        console.log(err);
        throw err; 
      }
    }

    static async getAlbuns(client) {
      try {
        const result = await client
          .db("beatrater")
          .collection("albuns")
          .find({});
        return await result.toArray();
      } catch (err) {
        console.log(err);
        throw err; 
      }
    }
  }
  
  module.exports = usersDAO;
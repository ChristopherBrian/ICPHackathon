import HashMap "mo:base/HashMap";
import Time "mo:base/Time";
import Nat "mo:base/Nat";
import Text "mo:base/Text";
import Int "mo:base/Int";
import Iter "mo:base/Iter";

actor {
  type SessionId = Text;
  type UserId = Text;

  var sessions: HashMap.HashMap<SessionId, HashMap.HashMap<UserId, Bool>> = 
    HashMap.HashMap<SessionId, HashMap.HashMap<UserId, Bool>>(
      10, 
      Text.equal, 
      Text.hash
    );

  public func createSession(): async SessionId {
    let sessionId = generateSessionId();
    let userMap = HashMap.HashMap<UserId, Bool>(
      10, 
      Text.equal,
      Text.hash
    );
    sessions.put(sessionId, userMap);
    return sessionId;
  };

  public func joinSession(sessionId: SessionId, userId: UserId): async Bool {
    switch (sessions.get(sessionId)) {
      case (?session) {
        session.put(userId, true);
        return true;
      };
      case null {
        return false;
      };
    }
  };

  private func generateSessionId(): SessionId {
    return Int.toText(Time.now());
  };
};
import HashMap "mo:base/HashMap";
import Time "mo:base/Time";
import Nat "mo:base/Nat";
import Text "mo:base/Text";
import Int "mo:base/Int";
import Iter "mo:base/Iter";

actor {
  type SessionId = Text;
  type UserId = Text;
  type Color = Nat16;
  type DrawingData = [Color];

  var sessions: HashMap.HashMap<SessionId, HashMap.HashMap<UserId, DrawingData>> = 
    HashMap.HashMap<SessionId, HashMap.HashMap<UserId, DrawingData>>(
      10, 
      Text.equal, 
      Text.hash
    );

  public func createSession(): async SessionId {
    let sessionId = generateSessionId();
    let userMap = HashMap.HashMap<UserId, DrawingData>(
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
        session.put(userId, []);
        return true;
      };
      case null {
        return false;
      };
    }
  };

  public func updateDrawing(sessionId: SessionId, userId: UserId, drawing: DrawingData): async Bool {
    switch (sessions.get(sessionId)) {
      case (?session) {
        session.put(userId, drawing);
        return true;
      };
      case null {
        return false;
      };
    }
  };

  public query func getDrawing(sessionId: SessionId): async ?[(UserId, DrawingData)] {
    switch (sessions.get(sessionId)) {
      case (?session) {
        return ?Iter.toArray(session.entries());
      };
      case null {
        return null;
      };
    }
  };

  private func generateSessionId(): SessionId {
    return Int.toText(Time.now());
  };
};
import React from 'react';


const ResetPasswordModal = () => {
  

  return (
    <div>
      <h2>Reset your password:</h2>
      <form>
        
        <div className="form-field">
          <label for="username">Username:</label>
          <input type="username" name="username" required />
        </div>

        <div className="form-field">
          <label for="newPassword">New Password:</label>
          <input type="newPassword" name="newPassword" required />
        </div>

        <div className="form-field">
          <label for="confirmPassword">Confirm Password:</label>
          <input type="confirmPassword" name="confirmPassword" required />
        </div>
        
        <button className="button-primary" type="submit">Reset Password</button>
      
      </form>
    </div>
  );
};

export default ResetPasswordModal;

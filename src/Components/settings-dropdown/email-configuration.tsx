import React, { useState } from "react";

import "./settings.css";
import {
  testEmailSettings,
  saveEmailSettings,
} from "../../services/email-settings-service";

const EmailConfiguration: React.FC = () => {
  const [server, setServer] = useState<string>("");
  const [port, setPort] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [securityType, setSecurityType] = useState<string>("");
  const [testEmail, setTestEmail] = useState<string>("");
  const [organizationId, setOrganizationId] = useState<string>(
    "669f03102a97b116272c2085",
  ); // Hardcoded organization id because we're wrapping up the auth process. For testing purposes: replace value with you org id.
  // @todo Replace hardcoded orgId during/after auth integration.
  const [organization, setOrganization] = useState<string>("");
  const [successMessage, setSuccessMessage] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const validateEmailSettings = (): boolean => {
    if (!server || !port || !username || !password || !securityType) {
      setErrorMessage("All fields must be filled out.");
      return false;
    }
    if (!/^\S+@\S+\.\S+$/.test(testEmail)) {
      setErrorMessage("Invalid email format.");
      return false;
    }
    return true;
  };
  // TEST EMAIL SETTINGS>>>>>>>
  const handleSendTestEmail = async (
    event: React.MouseEvent<HTMLButtonElement>,
  ): Promise<void> => {
    event.preventDefault(); // Prevent form submission
    if (!validateEmailSettings()) return;

    try {
      console.log("Sending test email with settings:", {
        organizationId,
        server,
        port,
        username,
        password,
        securityType,
        testEmail,
      });
      const data = await testEmailSettings(
        organizationId,
        server,
        Number(port),
        username,
        password,
        securityType,
        testEmail,
      );

      if (data.success) {
        setSuccessMessage(data.message);
        setErrorMessage("");
      } else {
        setErrorMessage(
          data.message || "An error occurred while sending the test email.",
        );
      }
    } catch (error: any) {
      setErrorMessage(
        error.message || "An error occurred while sending the test email.",
      );
    }
  };

  // SAVE EMAIL SETTINGS AFTER SUCCESS>>>>>>>
  const handleSave = async (
    event: React.MouseEvent<HTMLButtonElement>,
  ): Promise<void> => {
    event.preventDefault(); // Prevent form submission
    if (!validateEmailSettings()) return;

    try {
      const data = await saveEmailSettings(
        server,
        Number(port),
        username,
        password,
        securityType,
        organization,
      );

      if (data.success) {
        setSuccessMessage(data.message || "Email settings saved successfully.");
        setErrorMessage("");
      } else {
        setErrorMessage(
          data.message || "An error occurred while saving the email settings.",
        );
      }
    } catch (error: any) {
      setErrorMessage(
        error.message || "An error occurred while saving the email settings.",
      );
    }
  };

  return (
    <div className="email-settings">
      <h1>Email Settings</h1>
      <p>Configure your email settings.</p>
      {errorMessage && (
        <div className="error-message">
          <p>Error</p>
          <p>{errorMessage}</p>
        </div>
      )}
      <form action="">
        <div className="form-group">
          <label>SMTP server</label>
          <label>server</label>
          <input
            type="text"
            value={server}
            onChange={(e) => setServer(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Port</label>
          <input
            type="text"
            value={port}
            onChange={(e) => setPort(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Security type</label>
          <select
            className="security-type"
            value={securityType}
            onChange={(e) => setSecurityType(e.target.value)}
          >
            <option value=""></option>
            <option value="SSL">SSL</option>
            <option value="TLS">TLS</option>
          </select>
        </div>
        <div className="form-group">
          <label>Send test email</label>
          <input
            type="email"
            value={testEmail}
            onChange={(e) => setTestEmail(e.target.value)}
            placeholder="test@acme.com"
          />
          <button onClick={handleSendTestEmail}>Send Test Email</button>
        </div>
        {/* >>>>>added organization field to save the email-settings*/}
        <div className="form-group">
          <label>Organization</label>
          <input
            type="text"
            value={organization}
            onChange={(e) => setOrganization(e.target.value)}
          />
        </div>
      </form>

      <div className="success-from">
        {successMessage && (
          <div className="success-message">
            <p>Success</p>
            <p>{successMessage}</p>
          </div>
        )}
        <div className="buttons">
          <button onClick={() => window.close()}>Cancel</button>
          <button onClick={handleSave}>Save</button>
        </div>
      </div>
    </div>
  );
};

export default EmailConfiguration;

export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor">
            <h3><label htmlFor="wd-name">Assignment Name</label></h3>
            <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
            <textarea id="wd-description">
                The assignment is available onlineLinks to an external site.

                Submit a link to the landing page of your Web application running on Netlify.

                The landing page should include the following:

                Your full name and section
                Links to each of the lab assignments
                Link to the Kanbas application
                Links to all relevant source code repositories
                The Kanbas application should include a link to navigate back to the landing page.
            </textarea>
            <br />
            <table>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-points">Points</label>
                    </td>
                    <td>
                        <input id="wd-points" value={100} />
                    </td>
                </tr>
                <br />
                <tr>

                    <td align="right" valign="top">
                        <label htmlFor="wd-group">Assignment Groups</label>
                    </td>
                    <td>
                        <select id="wd-group">
                            <option value="ASSIGNMENTS">Assignments</option>
                        </select>
                    </td>
                </tr>
                <br />
                <tr>

                    <td align="right" valign="top">
                        <label htmlFor="wd-display-grade-as">Display Grade as</label>
                    </td>
                    <td>
                        <select id="wd-display-grade-as">
                            <option value="PERCENT">Percentage</option>
                        </select>
                    </td>
                </tr>
                <br />
                <tr>

                    <td align="right" valign="top">
                        <label htmlFor="wd-submission-type">Submission Type</label>
                    </td>
                    <td>
                        <select id="wd-submission-type">
                            <option value="ONLINE">online</option>
                        </select>
                        <br /><br />
                        <text>Online Entry Options</text><br />
                        <input type="checkbox" name="check-genre" id="wd-text-entry" />
                        <label htmlFor="wd-chkbox-comedy">Text Entry</label><br />

                        <input type="checkbox" name="check-genre" id="wd-website-url" />
                        <label htmlFor="wd-chkbox-drama">Website URL</label><br />

                        <input type="checkbox" name="check-genre" id="wd-media-recordings" />
                        <label htmlFor="wd-chkbox-scifi">Media Recordings</label><br />

                        <input type="checkbox" name="check-genre" id="wd-student-annotation" />
                        <label htmlFor="wd-chkbox-fantasy">Student Annotation</label>

                        <input type="checkbox" name="check-genre" id="wd-file-upload" />
                        <label htmlFor="wd-chkbox-fantasy">File Uploads</label>

                    </td>

                </tr>
                <br />
                <tr>

                    <td align="right" valign="top">
                        <label htmlFor="wd-group">Assignment</label>
                    </td>
                    <td>

                        <text>Assign to</text>
                        <br /><input value="Everyone" id="wd-assign-to" />
                        <br /><br />
                        <text>Due</text>
                        <br /><input type="date"
                            id="wd-due-date"
                            value="2024-05-13" /><br /><br />
                        <table> <tbody>
                            <tr><td>Available from</td>
                                <td>Until</td>
                            </tr>
                            <tr>
                                <td><input type="date"
                            id="wd-available-from"
                            value="2024-05-13" /></td>
                            <td><input type="date"
                            id="wd-available-until"
                            value="2024-05-13" /></td>
                            </tr>
                        </tbody>
                        </table>
                    </td>
                </tr>
                
            </table>
            <hr/>
            
            <button>Cancel</button> <button>Save</button>
        </div>
    );
}
